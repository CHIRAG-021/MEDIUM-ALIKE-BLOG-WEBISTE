import z from "zod";
export const signupinput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})
export type SignupInput=z.infer<typeof signupinput>

export const signininput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
})
export type SigninInput=z.infer<typeof signininput>

export const bloginput=z.object({
    title:z.string(),
    content:z.string(),
})
export type BlogInput=z.infer<typeof bloginput>

export const updateinput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})
export type UpdateInput=z.infer<typeof updateinput>