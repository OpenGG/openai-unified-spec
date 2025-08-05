// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIUnified from 'openai-unified';

const client = new OpenAIUnified({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.chat.createCompletion({
      messages: [{ content: 'string', role: 'developer' }],
      model: 'gpt-4o',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.chat.createCompletion({
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
      metadata: { foo: 'string' },
      modalities: ['text'],
      n: 1,
      parallel_tool_calls: true,
      prediction: { content: 'string', type: 'content' },
      presence_penalty: -2,
      prompt_cache_key: 'prompt-cache-key-1234',
      reasoning_effort: 'low',
      response_format: { type: 'text' },
      safety_identifier: 'safety-identifier-1234',
      seed: -9007199254740991,
      service_tier: 'auto',
      stop: '\n',
      store: true,
      stream: true,
      stream_options: { include_usage: true },
      temperature: 1,
      tool_choice: 'none',
      tools: [
        {
          function: { name: 'name', description: 'description', parameters: { foo: 'bar' }, strict: true },
          type: 'function',
        },
      ],
      top_logprobs: 0,
      top_p: 1,
      user: 'user-1234',
      web_search_options: {
        search_context_size: 'low',
        user_location: {
          approximate: { city: 'city', country: 'country', region: 'region', timezone: 'timezone' },
          type: 'approximate',
        },
      },
    });
  });
});
