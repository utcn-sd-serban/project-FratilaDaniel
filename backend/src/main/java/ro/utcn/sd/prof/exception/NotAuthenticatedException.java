package ro.utcn.sd.prof.exception;

public class NotAuthenticatedException extends RuntimeException {
    public NotAuthenticatedException() {
        super("Not authenticated.");
    }
}
