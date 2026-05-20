import classes from "../styles/index.module.css";
import { Group, Image, Paper, Text } from "@mantine/core";
import { motion } from "framer-motion";
import expressIcon from "src/assets/images/Express.png";
import graphqlIcon from "src/assets/images/graphql.png";
import mongoIcon from "src/assets/images/MongoDB.png";
import nodeIcon from "src/assets/images/node.png";
import reactIcon from "src/assets/images/react.png";
import typescriptIcon from "src/assets/images/ts.png";

const items = [
  { label: "React", src: reactIcon },
  { label: "TypeScript", src: typescriptIcon },
  { label: "Node.js", src: nodeIcon },
  { label: "Express", src: expressIcon },
  { label: "GraphQL", src: graphqlIcon },
  { label: "MongoDB", src: mongoIcon },
];

export const StackIconRail = () => {
  return (
    <Group className={classes["stack-icon-rail"]} gap="sm">
      {items.map((item, index) => (
        <Paper
          key={item.label}
          component={motion.div}
          className={classes["stack-icon-pill"]}
          p="xs"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Image src={item.src} alt={item.label} className={classes["stack-icon-image"]} />
          <Text size="xs" fw={900}>
            {item.label}
          </Text>
        </Paper>
      ))}
    </Group>
  );
};
