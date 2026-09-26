import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsPanel, TabsTab } from "./tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-80">
      <TabsList>
        <TabsTab value="account">Account</TabsTab>
        <TabsTab value="password">Password</TabsTab>
        <TabsTab value="settings">Settings</TabsTab>
      </TabsList>
      <TabsPanel value="account">Manage your account details here.</TabsPanel>
      <TabsPanel value="password">Change your password here.</TabsPanel>
      <TabsPanel value="settings">Adjust your preferences here.</TabsPanel>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="one" className="w-80">
      <TabsList>
        <TabsTab value="one">One</TabsTab>
        <TabsTab value="two" disabled>
          Two
        </TabsTab>
        <TabsTab value="three">Three</TabsTab>
      </TabsList>
      <TabsPanel value="one">First panel content.</TabsPanel>
      <TabsPanel value="three">Third panel content.</TabsPanel>
    </Tabs>
  ),
};
