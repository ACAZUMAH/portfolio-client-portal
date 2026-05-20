import { Box, Text } from "@mantine/core";

interface MetricProps {
  label: string;
  value: string;
}

export const Metric = ({ label, value }: MetricProps) => (
  <Box>
    <Text fw={900} size="xl">
      {value}
    </Text>
    <Text c="dimmed" size="sm">
      {label}
    </Text>
  </Box>
);
