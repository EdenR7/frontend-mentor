export function getErrorMessages(error: unknown) {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (
    error !== null &&
    typeof error === "object" &&
    "message" in error
  ) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An unknown error occurred";
  }
  return message;
}

export function getErrorName(error: unknown) {
  let name;
  if (error instanceof Error) {
    name = error.name;
  } else if (error !== null && typeof error === "object" && "name" in error) {
    name = error.name;
  } else if (typeof error === "string") {
    name = error;
  } else {
    name = "Unknown error name";
  }
  return name;
}
