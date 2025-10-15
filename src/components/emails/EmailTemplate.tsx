import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  yourName: string;
  senderName: string;
  senderEmail: string;
  contentMessage: string;
}

export const EmailTemplate = ({
  yourName,
  senderEmail,
  senderName,
  contentMessage,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>{contentMessage}</Preview>
      <Container style={container}>
        <Text style={paragraph}>Hai {yourName},</Text>
        <Text style={paragraph}>{contentMessage}</Text>
        <Text style={paragraph}>
          Pengirim,
          <br />
          {senderName}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>{senderEmail}</Text>
      </Container>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  yourName: 'Alan',
} as EmailTemplateProps;

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
