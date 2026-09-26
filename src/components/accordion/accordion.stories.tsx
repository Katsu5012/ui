import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "./accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    value: "shipping",
    title: "How long does shipping take?",
    body: "Orders ship within 2 business days and arrive in 3-5 days.",
  },
  {
    value: "returns",
    title: "What is the return policy?",
    body: "You can return any item within 30 days of purchase.",
  },
  {
    value: "support",
    title: "How do I contact support?",
    body: "Email us at support@example.com and we will respond within 24 hours.",
  },
];

export const Default: Story = {
  render: () => (
    <Accordion className="w-96">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionPanel>{item.body}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const WithOpenItem: Story = {
  render: () => (
    <Accordion className="w-96" defaultValue={["shipping"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionPanel>{item.body}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
