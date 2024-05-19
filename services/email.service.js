import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: "email",
  actions: {
    async sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params;
      // simulated Email Object
      console.log(`Sending email to ${recipient}, with subject ${subject}`);
      console.log(`Content: ${content}`);
      return `Email send to ${recipient}`;
    },
  },
});

export default broker;
