import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const cart = defineCollection({
    loader: file("src/items.json"),
    schema: () =>
        z.object({
            id: z.string(),
            name: z.string().min(2).max(100),
            description: z.string().min(10).max(500),
            price: z.number().min(0).max(1000),
            image: z.string(),
        }),
});

export const collections = {
    cart,
};
