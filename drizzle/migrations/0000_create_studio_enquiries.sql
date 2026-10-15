CREATE TABLE public.studio_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 project_type text NOT NULL CHECK (project_type IN ('Residential','Commercial','Styling','Other')),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000)
);
GRANT ALL ON public.studio_enquiries TO service_role;
REVOKE ALL ON public.studio_enquiries FROM anon, authenticated;
ALTER TABLE public.studio_enquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.studio_enquiries IS 'Private studio enquiries. Only validated server-side intake can insert; no visitor read access.';