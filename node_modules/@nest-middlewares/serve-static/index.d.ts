import { NestMiddleware } from '@nestjs/common';
import * as serveStatic from 'serve-static';
export declare class ServeStaticMiddleware implements NestMiddleware {
    static configure(root: string, opts?: serveStatic.ServeStaticOptions): void;
    private static root;
    private static options;
    use(req: any, res: any, next: any): void;
}
