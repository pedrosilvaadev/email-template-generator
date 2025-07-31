interface EmailTemplate {
  type: string;
  description: string;
}

export const emailTemplates: EmailTemplate[] = [
  {
    type: "Template Test",
    description:
      "Hello [Brand],\n\nMy name is John Doe, and I’m a content creator and software engineer with a strong presence in the tech and fitness community.\n\nOver the past month, I’ve reached more than 1 million impressions and 200,000 interactions across my social platforms.\n\nI’d love to explore a partnership opportunity with [Brand] to create engaging, high-impact sponsored content that aligns with your goals.\n\nPlease find my media kit here:\n👉 https://example.com/media-kit\n\nLooking forward to hearing from you!\n\nBest regards,\nJohn Doe\n@johndoedev",
  },
];
