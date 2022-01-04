for pkg in $(find ./packages -mindepth 1 -maxdepth 1 -type d -printf '%f\n'); do
    echo "@react-native-elements/$pkg"
    git push a `git subtree split --prefix packages/$pkg -b $pkg`:refs/heads/$pkg --force
done
