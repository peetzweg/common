// Copyright 2017-2023 @polkadot/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import { xglobal } from '@polkadot/x-global';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
xglobal.TextDecoder = undefined;

describe('TextDecoder (node)', (): void => {
  let TD: typeof TextDecoder;

  beforeEach(async (): Promise<void> => {
    const node = await import('./node.js');

    TD = node.TextDecoder;
  });

  it('encodes correctly', (): void => {
    expect(
      new TD().decode(new Uint8Array([97, 98, 99]))
    ).toEqual('abc');
  });
});
