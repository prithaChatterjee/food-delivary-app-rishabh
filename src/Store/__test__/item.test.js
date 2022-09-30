import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configStore from "../configStore";
import { loadItems } from "../items";

describe('getting items', () => {
    it('getting items from server', async () => {
        const { dispatch, getState } = configStore
        var mock = new MockAdapter(axios);
        mock.onGet("/items").reply(200, "Hello World");
        await dispatch(loadItems({ url: "/items" }))
        expect(getState().data).toContain("Hello World")
    });
})