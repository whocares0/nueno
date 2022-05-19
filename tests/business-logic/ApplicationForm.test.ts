import { ApplicationFormsCreateRequestParams } from "@api-contracts/application-forms/create";
import ApplicationFormEntity from "@business-logic/ApplicationForm";

import { minimalSetup } from "@helpers/tests/setup";
import { teardown } from "@helpers/tests/teardown";

describe("ApplicationForm", () => {
  beforeEach(async () => {
    await teardown();
  });

  describe("#create", () => {
    it("creates User", async () => {
      const applicationFrom = {
        jobUid: "",
        fields: [
          {
            label: "",
            required: false,
            type: {},
            fieldChoices: [
              {
                name: "",
                default: false,
              },
            ],
          },
        ],
      } as ApplicationFormsCreateRequestParams;

      const { user } = await minimalSetup();

      const entity = new ApplicationFormEntity();
      const result = await entity.create(applicationFrom, user.id);

      expect(result).toHaveProperty("jobUid");
    });
  });
});
