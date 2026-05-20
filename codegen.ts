import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8000/graphql",
  generates: {
    "./src/interfaces/graphql/": {
      plugins: ["typescript", "typescript-operations"],
      preset: "client",
    },
  },
  config: {
    namingConvention: {
      enumValues: "change-case-all#upperCase",
    },
  },
};

export default config;
