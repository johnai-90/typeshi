export async function register() {
  // Perform other necessary registrations or configurations here if needed
  // You can add logic here based on the runtime (nodejs or edge) if required.
}

export const onRequestError = () => {
  // Handle request errors manually, or leave this as a no-op function.
  console.error("Request error occurred");
};
