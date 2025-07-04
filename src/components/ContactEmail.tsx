import * as React from "react";
import { Html, Head, Preview, Body, Container, Text } from "@react-email/components";

export function ContactEmail({ name, phone, service, preferredDate, preferredTime, message }: any) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
      <Body style={{ background: "#fff" }}>
        <Container>
          <Text><b>Name:</b> {name}</Text>
          <Text><b>Phone:</b> {phone}</Text>
          <Text><b>Service:</b> {service}</Text>
          <Text><b>Date:</b> {preferredDate}</Text>
          <Text><b>Time:</b> {preferredTime}</Text>
          <Text><b>Message:</b> {message}</Text>
        </Container>
      </Body>
    </Html>
  );
}