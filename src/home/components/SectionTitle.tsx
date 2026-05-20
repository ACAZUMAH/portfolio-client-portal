import { Box, Text, Title } from "@mantine/core";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionTitle = ({
  description,
  eyebrow,
  title,
  centered,
}: SectionTitleProps) => {
  return (
    <Box mb="lg" ta={centered ? "center" : "left"}>
      <Title tt="uppercase" fw={800} c="#3b4652" order={1} size="50px">
        {eyebrow}
      </Title>
      {description ? (
        <Text mt="xs" c="dimmed" maw={720} mx={centered ? "auto" : 0}>
          {description}
        </Text>
      ) : null}
    </Box>
  );
};
