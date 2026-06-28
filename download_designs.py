import json
import urllib.request
import os
import shutil
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

files = [
    ".system_generated/steps/292/output.txt",
    ".system_generated/steps/295/output.txt",
    ".system_generated/steps/300/output.txt",
    ".system_generated/steps/306/output.txt",
    ".system_generated/steps/310/output.txt"
]

out_dir = ".stitch/designs"
os.makedirs(out_dir, exist_ok=True)

artifacts_dir = "/Users/macbook/.gemini/antigravity-ide/brain/4c44aff3-ec97-47a1-94e2-0b8c276bd22d"

screen_names = ["1_Dashboard", "2_SubmitForm", "3_Success", "4_TrackStatus", "5_ReportDetail"]

for i, path in enumerate(files):
    full_path = f"/Users/macbook/.gemini/antigravity-ide/brain/4c44aff3-ec97-47a1-94e2-0b8c276bd22d/{path}"
    try:
        with open(full_path, 'r') as f:
            data = json.load(f)
            
            components = data.get('outputComponents', [])
            for comp in components:
                if 'design' in comp and 'screens' in comp['design']:
                    for screen in comp['design']['screens']:
                        screen_id = screen.get('id', 'unknown')
                        html_url = screen.get('htmlCode', {}).get('downloadUrl')
                        screenshot_url = screen.get('screenshot', {}).get('downloadUrl')
                        
                        if html_url and screenshot_url:
                            html_path = os.path.join(out_dir, f"{screen_names[i]}.html")
                            img_path = os.path.join(out_dir, f"{screen_names[i]}.png")
                            
                            print(f"Downloading {screen_names[i]}...")
                            urllib.request.urlretrieve(html_url, html_path)
                            urllib.request.urlretrieve(screenshot_url, img_path)
                            print(f"Saved {screen_names[i]}")
                            
                            art_img_path = os.path.join(artifacts_dir, f"{screen_names[i]}.png")
                            shutil.copy(img_path, art_img_path)
    except Exception as e:
        print(f"Failed to process {path}: {e}")
