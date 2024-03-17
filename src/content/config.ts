import { defineCollection } from "astro:content";

const cvCollection = defineCollection({
    type: 'data'
});

export const collections = {
    'cv': cvCollection
}