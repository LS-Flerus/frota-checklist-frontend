import { ENDPOINTS } from "../util/constants";
import { type CreateUserPayload } from "../interfaces/Payloads";
import { axiosBackend } from "./axios";

export const createUser = async(payload: CreateUserPayload) => {
    const { data } = await axiosBackend.post<CreateUserPayload> (
        `/${ENDPOINTS.CRIAR_USUARIO}`,
        payload
    )
    return data
}