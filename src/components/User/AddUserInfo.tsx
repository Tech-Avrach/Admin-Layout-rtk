import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input, Button } from "@/components/ui";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required"),
});

function AddUserInfo() {
    const navigate = useNavigate();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            variant: "success", // 'destructive' | 'success' 
            title: "Success!",
            description: "User added successfully.",
        });
        navigate('/dashboard');
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-6">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} className="w-full" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-6">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" type="password" {...field} className="w-full" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="col-span-12 flex items-center py-4 gap-4">
                    <Link to={"/dashboard"} className="text-primary hover:underline text-sm">
                        <Button variant={"ghost"}>Cancel</Button>
                    </Link>
                    <Button type="submit" variant="default">Add User</Button>
                </div>
            </form>
        </Form>
    );
}

export default AddUserInfo;
