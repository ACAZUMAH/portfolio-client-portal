export const getVisitorId = () => {
  const key = "caleb-portfolio-visitor-id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;

  const next = crypto.randomUUID();
  localStorage.setItem(key, next);
  return next;
};

export const getSessionId = () => {
  const key = "portfolio-session";
  const existing = sessionStorage.getItem(key);
  if (existing) return existing;

  const visitorId = getVisitorId();
  sessionStorage.setItem(key, visitorId);
  return visitorId;
};
