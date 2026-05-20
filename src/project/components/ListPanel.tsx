import { Paper, Stack, Text, Title } from "@mantine/core";
import { Conditional } from "src/components/conditional";

interface ListPanelProps {
  title: string;
  items?: string[];
}

export const ListPanel = ({ title, items = [] }: ListPanelProps) => (
  <Paper p="xl" radius="md" withBorder>
    <Title order={2}>{title}</Title>
    <Stack mt="md" gap="sm">
      <Conditional condition={items.length}>
        {items.map(item => (
          <Text key={item}>{item}</Text>
        ))}
      </Conditional>
      <Conditional condition={!items.length}>
        <Text c="dimmed">No public details yet.</Text>
      </Conditional>
    </Stack>
  </Paper>
);
