import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/emails/EmailTemplate';
import { Resend } from 'resend';
import Validator from 'validatorjs';

export async function POST(req: Request) {
  // Fill your name and email
  const yourName = 'your name';
  const yourEmail = 'youremail@gmail.com';

  interface IRequestBody {
    senderEmail: string;
    senderName: string;
    contentMessage: string;
  }
  const { senderEmail, senderName, contentMessage }: IRequestBody =
    await req.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const validate = new Validator(
      {
        senderEmail,
        senderName,
        contentMessage,
      },
      {
        senderEmail: 'required|email',
        senderName: 'required|min:3',
        contentMessage: 'required|min:5',
      }
    );

    if (validate.passes()) {
      const { data, error } = await resend.emails.send({
        from: senderEmail,
        to: [yourEmail],
        subject: 'Hello world',
        react: (
          <EmailTemplate
            yourName={yourName}
            senderName={senderName}
            senderEmail={senderEmail}
            contentMessage={contentMessage}
          />
        ),
      });

      if (error) {
        return NextResponse.json(
          {
            message: 'Failed to send email!',
            error,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        message: 'success!',
        data: data,
      });
    } else {
      return NextResponse.json(
        {
          messsage: 'Validation fails!',
          error: validate.errors.errors,
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
