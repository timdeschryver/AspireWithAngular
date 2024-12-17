import { EnvironmentProviders, provideAppInitializer } from '@angular/core';
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { Resource } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions'
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

export function provideInstrumentation(): EnvironmentProviders {
  return provideAppInitializer(() => {
    const resource = Resource.default().merge(
      new Resource({
        [ ATTR_SERVICE_NAME ]: "Angular App",
        [ ATTR_SERVICE_VERSION ]: "1.0.0",
      }),
    );

    const provider = new WebTracerProvider({ resource });

    // For demo purposes only, immediately log traces to the console
    provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

    // Batch traces before sending them to Collector
    provider.addSpanProcessor(
      new BatchSpanProcessor(
        new OTLPTraceExporter({
          url: `${window.origin}/v1/traces`,
        }),
      ),
    );

    provider.register({
      contextManager: new ZoneContextManager(),
    });

    registerInstrumentations({
      instrumentations: [
        getWebAutoInstrumentations({
          '@opentelemetry/instrumentation-document-load': {},
          '@opentelemetry/instrumentation-user-interaction': {},
          '@opentelemetry/instrumentation-fetch': {},
          '@opentelemetry/instrumentation-xml-http-request': {},
        }),
      ],
    });
  });
}