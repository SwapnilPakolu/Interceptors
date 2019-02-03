import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { AuthInterceptorService } from './Authentication/auth-interceptor.service';
import { XML2JsonInterceptorService } from './ResponseFormat/xml2-json-interceptor.service';
import { AjaxBusyIdentifierInterceptorService } from './AjaxBusyIndicator/ajax-busy-identifier-interceptor.service';
import { RequestTimestampService } from './RequestTimestamp/request-timestamp.service';
import { ErrorNotifierService } from './ErrorNotifier/error-notifier.service';
import { RetryInterceptorService } from './RetryInterceptor/retry-interceptor.service';

export const interceptorProviders = 
   [
    { provide: HTTP_INTERCEPTORS, useClass: RequestTimestampService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxBusyIdentifierInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: XML2JsonInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorNotifierService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptorService, multi: true }    
];