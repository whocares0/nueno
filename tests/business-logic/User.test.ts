import UserEntity from "@business-logic/User";

import { teardown } from "@helpers/tests/teardown";

describe("User", () => {
  beforeEach(async () => {
    await teardown();
  });

  describe("#create", () => {
    it("creates User", async () => {
      const requestParams = {
        name: "kazeem Adewole",
        email: "kazeemadewole858@gmail.com",
        password: "kazeemkazeem",
      };

      const entity = new UserEntity();
      const result = await entity.create(requestParams);

      expect(result.user).toHaveProperty("id");
    });

    it("find User", async () => {
      const requestParams = {
        name: "kazeem Adewole",
        email: "kazeemadewole858@gmail.com",
        password: "kazeemkazeem",
      };

      const entity = new UserEntity();
      const user = await entity.create(requestParams);

      const id = user.user.id;

      const result = await entity.find(id);

      expect(result).toHaveProperty("id");
      expect(result?.name).toBe(requestParams.name);
      expect(result?.email).toBe(requestParams.email);
    });
  });
});
