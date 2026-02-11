import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, project_type, budget, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"DevCore Contacto" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nuevo proyecto - ${project_type || "Sin especificar"}`,
            html: `
                <h2>Nueva consulta de proyecto</h2>
                <p><b>Nombre:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Tipo:</b> ${project_type}</p>
                <p><b>Presupuesto:</b> ${budget}</p>
                <p><b>Mensaje:</b></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Error enviando correo" },
            { status: 500 }
        );
    }
}
