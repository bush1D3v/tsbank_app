import type { Meta, StoryObj } from "@storybook/react";
import { HomeScreen } from ".";
import { Footer, Header } from "@/components";

const HomeMeta: Meta<typeof HomeScreen> = {
  title: "Screens/Home",
  component: HomeScreen,
};

export default HomeMeta;

export const Default: StoryObj<typeof HomeScreen> = {};

export const WithHeaderAndFooter = () =>
  <>
    <Header />
    <HomeScreen />
    <Footer />
  </>;
