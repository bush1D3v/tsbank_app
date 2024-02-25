import { jest } from "@jest/globals";
import "@testing-library/jest-native/extend-expect";

jest.mock("@react-native-async-storage/async-storage", () =>
  // eslint-disable-next-line no-undef
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
