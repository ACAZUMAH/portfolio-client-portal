import { gql, useMutation } from "@apollo/client";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

const CREATE_CONTACT_LEAD = gql`
  mutation CreateContactLead($data: ContactLeadInput!) {
    createContactLead(data: $data) {
      id
      status
    }
  }
`;

export const useContactForm = () => {
  const [createLead, { loading: isSending }] = useMutation(CREATE_CONTACT_LEAD);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      company: "",
      projectInterest: "",
      message: "",
    },
    validate: {
      name: value => (value.trim().length < 2 ? "Name is required" : null),
      email: value => (/^\S+@\S+$/.test(value) ? null : "Valid email is required"),
      message: value => (value.trim().length < 10 ? "Tell me a little more" : null),
    },
  });

  const handleSubmit = form.onSubmit(async values => {
    await createLead({
      variables: {
        data: {
          ...values,
          sourcePage: window.location.pathname,
        },
      },
    });
    notifications.show({
      color: "green",
      title: "Message sent",
      message: "Thanks. Your message is now in my lead inbox.",
    });
    form.reset();
  });

  return {
    form,
    handleSubmit,
    isSending,
  };
};
