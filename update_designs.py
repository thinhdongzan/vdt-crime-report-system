import json
import urllib.request
import os
import shutil
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

out_dir = ".stitch/designs"
artifacts_dir = "/Users/macbook/.gemini/antigravity-ide/brain/4c44aff3-ec97-47a1-94e2-0b8c276bd22d"
path = "/Users/macbook/.gemini/antigravity-ide/brain/4c44aff3-ec97-47a1-94e2-0b8c276bd22d/.system_generated/steps/389/output.txt"
screen_names = ["1_Dashboard", "3_Success"]

try:
    with open(path, 'r') as f:
        data = json.load(f)
        
        components = data.get('outputComponents', [])
        for comp in components:
            if 'design' in comp and 'screens' in comp['design']:
                for i, screen in enumerate(comp['design']['screens']):
                    if i < len(screen_names):
                        name = screen_names[i]
                        html_url = screen.get('htmlCode', {}).get('downloadUrl')
                        screenshot_url = screen.get('screenshot', {}).get('downloadUrl')
                        
                        if html_url and screenshot_url:
                            html_path = os.path.join(out_dir, f"{name}.html")
                            img_path = os.path.join(out_dir, f"{name}.png")
                            
                            print(f"Downloading {name}...")
                            urllib.request.urlretrieve(html_url, html_path)
                            urllib.request.urlretrieve(screenshot_url, img_path)
                            print(f"Saved {name}")
                            
                            art_img_path = os.path.join(artifacts_dir, f"{name}.png")
                            shutil.copy(img_path, art_img_path)
except Exception as e:
    print(f"Failed to process {path}: {e}")
