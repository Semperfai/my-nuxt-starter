import type { Meta, StoryObj } from "@storybook/vue3";
import ExampleCard from "./ExampleCard.vue";

const meta: Meta<typeof ExampleCard> = {
  title: "Components/ExampleCard",
  component: ExampleCard,
};

export default meta;
type Story = StoryObj<typeof ExampleCard>;

export const Default: Story = {
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { ExampleCard },
    template: `
      <ExampleCard v-bind="args">
          <div>Example content in default slot</div>
      </ExampleCard>
    `,
  }),

  args: { title: "Example Card with Slot" },
};
