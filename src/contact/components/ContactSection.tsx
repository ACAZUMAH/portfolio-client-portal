import classes from "../styles/index.module.css";
import {
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  TextInput,
  Textarea,
  ThemeIcon,
} from "@mantine/core";
import { IconMail, IconSend } from "@tabler/icons-react";
import { SectionTitle } from "src/home/components/SectionTitle";
import { useContactForm } from "src/contact/hooks/useContactForm";

interface ContactSectionProps {
  email?: string;
}

export const ContactSection = ({ email }: ContactSectionProps) => {
  const { form, handleSubmit, isSending } = useContactForm();

  return (
    <Container id="contact" size="md" py={64}>
      <SectionTitle eyebrow="Contact" title="Send a message" centered />
      <Paper p="xl" radius="md" withBorder className={classes["contact-card"]}>
        <form onSubmit={handleSubmit}>
          <Stack>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Name" {...form.getInputProps("name")} />
              <TextInput label="Email" {...form.getInputProps("email")} />
            </SimpleGrid>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Company" {...form.getInputProps("company")} />
              <TextInput label="Project interest" {...form.getInputProps("projectInterest")} />
            </SimpleGrid>
            <Textarea minRows={5} label="Message" {...form.getInputProps("message")} />
            <Group justify="space-between">
              <Group gap="xs">
                <ThemeIcon variant="light">
                  <IconMail size={18} />
                </ThemeIcon>
                <Anchor href={`mailto:${email}`}>{email}</Anchor>
              </Group>
              <Button type="submit" loading={isSending} leftSection={<IconSend size={18} />}>
                Send message
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};
