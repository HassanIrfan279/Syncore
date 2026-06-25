import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  businessName?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(payload: ContactPayload) {
  const errors: FieldErrors = {};
  const lead = {
    name: readString(payload.name),
    email: readString(payload.email).toLowerCase(),
    phone: readString(payload.phone),
    businessName: readString(payload.businessName),
    service: readString(payload.service),
    budget: readString(payload.budget),
    message: readString(payload.message),
  };

  if (!lead.name) {
    errors.name = "Please enter your name.";
  }

  if (!lead.email) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(lead.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!lead.phone) {
    errors.phone = "Please enter your WhatsApp or phone number.";
  }

  if (!lead.message) {
    errors.message = "Please tell us a little about what you need.";
  }

  return { errors, lead };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid JSON payload.",
      },
      { status: 400 },
    );
  }

  if (readString(payload.website)) {
    return NextResponse.json({
      ok: true,
      message: "Thanks. Your request has been received.",
    });
  }

  const { errors, lead } = validateLead(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please fix the highlighted fields.",
        errors,
      },
      { status: 422 },
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[contact-lead]", {
      ...lead,
      receivedAt: new Date().toISOString(),
    });
  }

  // The visible contact form currently sends users to WhatsApp. This endpoint
  // remains as a validated server route for a future email or CRM integration.

  return NextResponse.json({
    ok: true,
    message: "Thanks. Your request has been received.",
  });
}
