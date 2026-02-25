# How to Push to GitHub

## Current Issue
You're authenticated as "Ajtiwari26" but need to push to "vidovermedia" account.

## Solution: Use Personal Access Token

### Step 1: Create Token
1. Go to: https://github.com/settings/tokens
2. Login with **vidovermedia** account
3. Click "Generate new token (classic)"
4. Name: "Vido Website Deploy"
5. Select scope: ✅ repo (full control)
6. Click "Generate token"
7. **COPY THE TOKEN** (save it somewhere safe!)

### Step 2: Update Remote URL
Replace `YOUR_TOKEN_HERE` with your actual token:

```bash
cd /Users/ajay/Desktop/vidovermedia/vido

# Remove old remote
git remote remove origin

# Add new remote with token
git remote add origin https://YOUR_TOKEN_HERE@github.com/vidovermedia/videomedia.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify
```bash
# Check remote
git remote -v

# Should show:
# origin  https://YOUR_TOKEN_HERE@github.com/vidovermedia/videomedia.git (fetch)
# origin  https://YOUR_TOKEN_HERE@github.com/vidovermedia/videomedia.git (push)
```

## Alternative: GitHub CLI (Easier)

If you have GitHub CLI installed:

```bash
# Logout current user
gh auth logout

# Login with vidovermedia account
gh auth login
# Choose: GitHub.com → HTTPS → Login with browser
# Login with vidovermedia credentials

# Push
cd /Users/ajay/Desktop/vidovermedia/vido
git push -u origin main
```

## Alternative: SSH Key (Most Secure)

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "vidovermedia@gmail.com"
# Press Enter for default location
# Enter passphrase (optional)
```

2. Add to GitHub:
```bash
# Copy public key
cat ~/.ssh/id_ed25519.pub
# Copy the output
```

3. Add to GitHub:
   - Go to: https://github.com/settings/keys
   - Login with vidovermedia account
   - Click "New SSH key"
   - Paste the key
   - Save

4. Update remote:
```bash
cd /Users/ajay/Desktop/vidovermedia/vido
git remote remove origin
git remote add origin git@github.com:vidovermedia/videomedia.git
git push -u origin main
```

## Quick Test
After setting up authentication, test with:
```bash
cd /Users/ajay/Desktop/vidovermedia/vido
git push -u origin main
```

You should see:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/vidovermedia/videomedia.git
 * [new branch]      main -> main
```

## Need Help?
If you get errors, check:
1. Token has correct permissions (repo scope)
2. Token is not expired
3. You're logged into correct GitHub account
4. Repository exists: https://github.com/vidovermedia/videomedia
