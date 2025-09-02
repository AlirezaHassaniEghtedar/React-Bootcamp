import type { ConfigurationType } from "../types/configuration.type.ts";

import { richFetch } from "../utils/fetch.utils.ts";

export async function fetchConfigurationApi(): Promise<ConfigurationType> {
  const response = await richFetch("/configuration");

  return await response.json();
}
