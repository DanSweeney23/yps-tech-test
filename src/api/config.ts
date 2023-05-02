import { ref, type Ref } from "vue";

export const baseUrl = "https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1";

export type ApiRequest<d = any> = {
  data: Ref<d | undefined>
  loading: Ref<boolean>
  error: Ref<boolean>
  doRequest: (...params: any[]) => Promise<void>
}

export function useRequest<d = any>(request: (...params: any[]) => Promise<Response>): ApiRequest<d> {
  const data = ref<d>();
  const loading = ref(false);
  const error = ref(false);

  const doRequest = async (...params: any[]) => {
    loading.value = true;
    data.value = undefined;
    error.value = false;

    try {
      const res = await request(params);

      loading.value = true;

      if (!res.ok) {
        error.value = true;
        return;
      }

      data.value = await res.json() as d;

    } catch (err) {
      console.error(err);
      error.value = true;
    }
  }

  return { loading, data, error, doRequest }
}

