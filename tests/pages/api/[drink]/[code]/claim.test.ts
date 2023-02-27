import ClaimHandler from "../../../../../pages/api/[drink]/[code]/claim";
import { createMocks } from "node-mocks-http";
import { useCodeRepository } from "../../../../../lib/code_repository";
import { usePodContract } from "../../../../../lib/contract";

describe("claim API endpoint", () => {
  it("should 404 on GETs", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    expect(await ClaimHandler(req, res)).toEqual(
      expect.objectContaining({ statusCode: 404 })
    );
  });

  //   it("should return error 400 if pass_code is invalid", async () => {
  //     process.env.PASSWORD = "test";
  //     jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(false);

  //     const code = "12345";
  //     const address = "XYZ";

  //     const { req, res } = createMocks({
  //       method: "POST",
  //       query: {
  //         code,
  //       },
  //       body: {
  //         address,
  //         password: "invalid",
  //       },
  //     });

  //     await handler(req, res);

  //     expect(res._getStatusCode()).toEqual(400);
  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         error: "Code cannot be confirmed.",
  //       })
  //     );
  //   });

  //   it("should return error 400 if pass_code is not passed", async () => {
  //     process.env.PASSWORD = "test";
  //     jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(false);

  //     const code = "12345";
  //     const address = "XYZ";

  //     const { req, res } = createMocks({
  //       method: "POST",
  //       query: {
  //         code,
  //       },
  //       body: {
  //         address,
  //       },
  //     });

  //     await handler(req, res);

  //     expect(res._getStatusCode()).toEqual(400);
  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         error: "Code cannot be confirmed.",
  //       })
  //     );
  //   });

  //   it("should return error 400 if code is invalid", async () => {
  //     process.env.PASSWORD = "test";
  //     const isValidSpy = jest
  //       .spyOn(CodeRepository.prototype, "isValid")
  //       .mockResolvedValue(false);

  //     const code = "12345";
  //     const address = "XYZ";

  //     const { req, res } = createMocks({
  //       method: "POST",
  //       query: {
  //         code,
  //       },
  //       body: {
  //         address,
  //         password: process.env.PASSWORD,
  //       },
  //     });

  //     await handler(req, res);

  //     expect(isValidSpy).toHaveBeenCalledWith(code);
  //     expect(res._getStatusCode()).toEqual(400);
  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         error: "Code has already been claimed.",
  //       })
  //     );
  //   });

  //   it("should return success if claiming works", async () => {
  //     process.env.PASS_CODE = "test";
  //     jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
  //     const claimSpy = jest.spyOn(Contract.prototype, "claim").mockResolvedValue({
  //       wait: jest.fn().mockResolvedValue({ tx: "test" }),
  //     });

  //     const code = "12345";
  //     const address = "XYZ";

  //     const { req, res } = createMocks({
  //       method: "POST",
  //       query: {
  //         code,
  //       },
  //       body: {
  //         address,
  //         password: process.env.PASSWORD,
  //       },
  //     });

  //     await handler(req, res);

  //     expect(claimSpy).toHaveBeenCalledWith(address, code);
  //     expect(res._getStatusCode()).toEqual(200);
  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         tx: "test",
  //       })
  //     );
  //   });

  //   it("should return claim error if it doesn't work", async () => {
  //     process.env.PASS_CODE = "test";
  //     jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
  //     const claimSpy = jest
  //       .spyOn(Contract.prototype, "claim")
  //       .mockImplementation(() => {
  //         throw new Error("This is the error message.");
  //       });

  //     const code = "12345";
  //     const address = "XYZ";

  //     const { req, res } = createMocks({
  //       method: "POST",
  //       query: {
  //         code,
  //       },
  //       body: {
  //         address,
  //         password: process.env.PASSWORD,
  //       },
  //     });

  //     await handler(req, res);

  //     expect(claimSpy).toHaveBeenCalledWith(address, code);
  //     expect(res._getStatusCode()).toEqual(400);
  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         error: "This is the error message.",
  //       })
  //     );
  //   });
});
