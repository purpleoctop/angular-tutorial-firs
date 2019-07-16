import { AuthService } from './auth.service';

describe('auth service tests', () => {
    let authService: AuthService;

    beforeEach(() => {
        authService = new AuthService();
    });
    it('Default value isAccessallowedshould be false', () => {
        expect(authService.isAccessAllowed).toBe(false);
    });

    it('method isUserAuthenticated should return isAccessallowed', () => {
        expect(authService.isUserAuthenticated()).toBe(authService.isAccessAllowed)
    });
    it('Method allowaccess should change isAccessallowed to true', () => {
        authService.allowAccess();
        expect(authService.isAccessAllowed).toBe(true);
    });
    it('Method blockAccess should change isAccessallowed to false', () => {
        authService.blockAccess();
        expect(authService.isAccessAllowed).toBe(false);
    });
});
