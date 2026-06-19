CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contact_submissions" ON contact_submissions FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "select_contact_submissions" ON contact_submissions FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "update_contact_submissions" ON contact_submissions FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_contact_submissions" ON contact_submissions FOR DELETE
  TO authenticated USING (true);
