import classes from "../styles/index.module.css";
import { Box, Container, Paper, SimpleGrid, Text } from "@mantine/core";
import { SectionTitle } from "./SectionTitle";

interface TestimonialsSectionProps {
  testimonials: any[];
}

export const TestimonialsSection = ({ testimonials = [] }: TestimonialsSectionProps) => {
  return (
    <Box className={classes["section-band"]}>
      <Container size="xl" py={64}>
        <SectionTitle eyebrow="Trust" title="Proof and references" />
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          {testimonials.map(testimonial => (
            <Paper key={testimonial.id} p="xl" radius="md" withBorder className={classes["testimonial-card"]}>
              <Text size="lg">"{testimonial.quote}"</Text>
              <Text mt="md" fw={800}>
                {testimonial.name}
              </Text>
              <Text c="dimmed">
                {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
