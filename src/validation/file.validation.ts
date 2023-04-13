import { any, object, string } from "zod";

const create = object({
  file: any(),
});

export const fileValidation = {
  create,
};
