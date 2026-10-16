# Generates a valid standard PDF document without external dependencies
import sys

def create_pdf(output_path):
    # A standard minimalist PDF with clean typography and layout
    pages_text = [
        "BT",
        "/F2 20 Tf 50 780 Td (KEVIN KIPYEGON) Tj",
        "/F1 11 Tf 0 -22 Td (Accountant | Software Engineer | Data Analyst | AI Builder) Tj",
        "/F1 9 Tf 0 -16 Td (Nairobi, Kenya | +254 740 840 045 | kevinkipyegon111@gmail.com | github.com/KevinKay-art) Tj",
        "/F2 12 Tf 0 -30 Td (PROFESSIONAL SUMMARY) Tj",
        "/F1 9 Tf 0 -14 Td (Detail-oriented accounting and technology professional holding a Bachelor of Commerce) Tj",
        "0 -12 Td ((Accounting Option, Second Class Honours Upper Division) from Kabarak University with over five) Tj",
        "0 -12 Td (years of progressive experience in financial reporting, budgeting, reconciliation, and tax compliance.) Tj",
        "0 -12 Td (Currently expanding into software engineering and data analytics via PLP Africa (2024-present).) Tj",
        "0 -12 Td (Pursuing CPA (KASNEB) and FMVA certifications. Bilingual in English and Swahili.) Tj",
        "/F2 12 Tf 0 -24 Td (EDUCATION & CERTIFICATIONS) Tj",
        "/F2 10 Tf 0 -14 Td (Software Development & Engineering | PLP Africa (Power Learn Project)) Tj",
        "/F1 9 Tf 0 -12 Td (2024 - Present: Python, SQL, database design, modern web architecture) Tj",
        "/F2 10 Tf 0 -14 Td (Bachelor of Commerce (Accounting Option) | Kabarak University) Tj",
        "/F1 9 Tf 0 -12 Td (Graduated Dec 2021: Second Class Honours (Upper Division). Outstanding performance recognition) Tj",
        "/F1 9 Tf 0 -12 Td (Certifications in Progress: CPA (KASNEB), Financial Modeling & Valuation Analyst (FMVA)) Tj",
        "/F1 9 Tf 0 -12 Td (Completed: Excel for Accountants, Coursera (2022)) Tj",
        "/F2 12 Tf 0 -24 Td (PROFESSIONAL EXPERIENCE) Tj",
        "/F2 10 Tf 0 -14 Td (Accountant Intern | County Government of Kericho) Tj",
        "/F1 9 Tf 0 -12 Td (April 2023 - April 2024 | Kericho, Kenya) Tj",
        "0 -12 Td (- Prepared and reviewed financial statements aligned to IPSAS and government accounting standards.) Tj",
        "0 -12 Td (- Processed and verified invoices, receipts, and multi-departmental payment vouchers.) Tj",
        "0 -12 Td (- Executed end-to-end monthly bank reconciliations and verified general ledger balances.) Tj",
        "0 -12 Td (- Spearheaded budget and expenditure variance analysis for annual planning.) Tj",
        "0 -12 Td (- Handled VAT, PAYE, and withholding tax filings compliant with KRA statutory regulations.) Tj",
        "/F2 10 Tf 0 -16 Td (Junior Accountant (Industrial Attachment) | KEPHIS) Tj",
        "/F1 9 Tf 0 -12 Td (September 2021 - November 2021 | Nairobi, Kenya) Tj",
        "0 -12 Td (- Managed daily financial transactions, cheque issuances, bank deposits, and payment processing.) Tj",
        "0 -12 Td (- Conducted bank reconciliations, ledger tracking, and audit-ready records filing.) Tj",
        "/F2 12 Tf 0 -24 Td (TECHNICAL SKILLS & CORE COMPETENCIES) Tj",
        "/F1 9 Tf 0 -14 Td (Accounting & Finance: Financial Reporting, Budgeting & Forecasting, Tax Compliance, IFRS/IPSAS, Auditing) Tj",
        "0 -12 Td (Programming & Data: Python (Pandas, NumPy, automation), SQL (PostgreSQL, MySQL), Data Modeling) Tj",
        "0 -12 Td (AI & Modern Tools: LLM Prompt Engineering, Financial Anomaly Detection, Chart.js, ERPs (QuickBooks, Sage)) Tj",
        "0 -12 Td (Languages: English (Full professional), Swahili (Full professional, translation & localisation)) Tj",
        "/F2 12 Tf 0 -24 Td (LEADERSHIP & ENGAGEMENT) Tj",
        "/F1 9 Tf 0 -14 Td (Treasurer - Kabarak University Accounting Club (2020-2021): Managed club funds, audits & event budgets.) Tj",
        "0 -12 Td (Volunteer Coordinator - Kabarak Career Fair (2019): Mentorship workshops & employer networking.) Tj",
        "0 -16 Td (*References available upon request.*) Tj",
        "ET"
    ]
    
    stream_content = "\n".join(pages_text).encode("latin1")
    stream_len = len(stream_content)
    
    objects = []
    
    # 1: Catalog
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # 3: Page
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>")
    # 4: Stream
    objects.append(f"<< /Length {stream_len} >>\nstream\n".encode("latin1") + stream_content + b"\nendstream")
    # 5: Font F1 (Helvetica)
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    # 6: Font F2 (Helvetica-Bold)
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    
    with open(output_path, "wb") as f:
        f.write(b"%PDF-1.4\n")
        offsets = []
        for i, obj in enumerate(objects):
            offsets.append(f.tell())
            f.write(f"{i+1} 0 obj\n".encode("latin1"))
            f.write(obj)
            f.write(b"\nendobj\n")
            
        xref_offset = f.tell()
        f.write(f"xref\n0 {len(objects)+1}\n".encode("latin1"))
        f.write(b"0000000000 65535 f \n")
        for offset in offsets:
            f.write(f"{offset:010d} 00000 n \n".encode("latin1"))
            
        f.write(b"trailer\n")
        f.write(f"<< /Size {len(objects)+1} /Root 1 0 R >>\n".encode("latin1"))
        f.write(b"startxref\n")
        f.write(f"{xref_offset}\n%%EOF\n".encode("latin1"))

if __name__ == "__main__":
    create_pdf("./public/static/Kevin_Kipyegon_CV.pdf")
    create_pdf("./static/Kevin_Kipyegon_CV.pdf")
    print("PDF generated successfully")
