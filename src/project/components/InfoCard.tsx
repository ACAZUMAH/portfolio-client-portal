import { Paper, Text } from "@mantine/core";

interface InfoCardProps {
  label: string;
  value: string;
}

export const InfoCard = ({ label, value }: InfoCardProps) => (
  <Paper p="lg" radius="md" withBorder>
    <Text c="dimmed" size="sm">
      {label}
    </Text>
    <Text fw={800}>{value}</Text>
  </Paper>
);
