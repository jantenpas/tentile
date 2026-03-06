#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DocsStack } from '../lib/docs-stack';

const app = new cdk.App();

new DocsStack(app, 'TentileDocsStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
  domainName: 'tentile.dev',
  githubRepo: 'jantenpas/tentile',
});
