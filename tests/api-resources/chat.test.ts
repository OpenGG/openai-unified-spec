// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIUnified from 'openai-unified';

const client = new OpenAIUnified({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Prism tests are disabled
  test.skip('createChatCompletion: only required params', async () => {
    const responsePromise = client.chat.createChatCompletion({
      CreateChatCompletionRequest: { messages: [{ content: 'string', role: 'developer' }], model: 'gpt-4o' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createChatCompletion: required and optional params', async () => {
    const response = await client.chat.createChatCompletion({
      CreateChatCompletionRequest: {
        top_logprobs: 0,
        messages: [{ content: 'string', role: 'developer', name: 'name' }],
        model: 'gpt-4o',
        audio: { format: 'wav', voice: 'ash' },
        frequency_penalty: -2,
        function_call: 'none',
        functions: [{ name: 'name', description: 'description', parameters: { foo: 'bar' } }],
        logit_bias: { foo: 0 },
        logprobs: true,
        max_completion_tokens: 0,
        max_tokens: 0,
        modalities: ['text'],
        n: 1,
        parallel_tool_calls: true,
        prediction: { content: 'string', type: 'content' },
        presence_penalty: -2,
        reasoning_effort: 'low',
        response_format: { type: 'text' },
        seed: -9007199254740991,
        stop: '\n',
        store: true,
        stream: true,
        stream_options: { include_usage: true },
        tool_choice: 'none',
        tools: [
          {
            function: { name: 'name', description: 'description', parameters: { foo: 'bar' }, strict: true },
            type: 'function',
          },
        ],
        web_search_options: {
          search_context_size: 'low',
          user_location: {
            approximate: { city: 'city', country: 'country', region: 'region', timezone: 'timezone' },
            type: 'approximate',
          },
        },
      },
    });
  });
});
