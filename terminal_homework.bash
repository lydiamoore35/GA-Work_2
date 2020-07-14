lydiamoore@Lydias-MacBook-Pro homework1 % cd ..
lydiamoore@Lydias-MacBook-Pro Lydia-Moore-seir-flex-homework % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % ls
GA				ThisIsRight
Lydia-Moore-seir-flex-homework	repo-practice
Moore				seir-flex-zen-work
SEIR-FLEX-ZEN
lydiamoore@Lydias-MacBook-Pro Desktop % mkdir galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro Desktop % mkdir death_star
lydiamoore@Lydias-MacBook-Pro Desktop % cd death_star 
lydiamoore@Lydias-MacBook-Pro death_star % touch darth_vader.txt
lydiamoore@Lydias-MacBook-Pro death_star % touch princess_leia.txt
lydiamoore@Lydias-MacBook-Pro death_star % touch storm_trooper.txt
lydiamoore@Lydias-MacBook-Pro death_star % pwd
/Users/lydiamoore/Desktop/death_star
lydiamoore@Lydias-MacBook-Pro death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
lydiamoore@Lydias-MacBook-Pro death_star % cd .. 
lydiamoore@Lydias-MacBook-Pro Desktop % cd galaxy_far_far_away 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mkdir tatoonie
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd tatoonie 
lydiamoore@Lydias-MacBook-Pro tatoonie % touch luke.txt
lydiamoore@Lydias-MacBook-Pro tatoonie % touch ben_kenobi.txt
lydiamoore@Lydias-MacBook-Pro tatoonie % cd .. 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
tatoonie
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd tatoonie 
lydiamoore@Lydias-MacBook-Pro tatoonie % mkdir millenium_falcon
lydiamoore@Lydias-MacBook-Pro tatoonie % ls
ben_kenobi.txt		luke.txt		millenium_falcon
lydiamoore@Lydias-MacBook-Pro tatoonie % cd millenium_falcon 
lydiamoore@Lydias-MacBook-Pro millenium_falcon % touch han_solo.txt
lydiamoore@Lydias-MacBook-Pro millenium_falcon % touch chewbaca.txt
lydiamoore@Lydias-MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt
lydiamoore@Lydias-MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt
lydiamoore@Lydias-MacBook-Pro millenium_falcon % cd ..
lydiamoore@Lydias-MacBook-Pro tatoonie % ls
ben_kenobi.txt		luke.txt		millenium_falcon
lydiamoore@Lydias-MacBook-Pro tatoonie % mv ben_kenobi.txt obi_wan.txt
lydiamoore@Lydias-MacBook-Pro tatoonie % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % ls
GA				death_star
Lydia-Moore-seir-flex-homework	galaxy_far_far_away
Moore				repo-practice
SEIR-FLEX-ZEN			seir-flex-zen-work
ThisIsRight
lydiamoore@Lydias-MacBook-Pro Desktop % cd death_star 
lydiamoore@Lydias-MacBook-Pro death_star % cp storm_trooper.txt tatoonie
lydiamoore@Lydias-MacBook-Pro death_star % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % mv luke.txt millenium_falcon
mv: rename luke.txt to millenium_falcon: No such file or directory
lydiamoore@Lydias-MacBook-Pro Desktop % cd galaxy_far_far_away 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
tatoonie
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd tatoonie 
lydiamoore@Lydias-MacBook-Pro tatoonie % ls
luke.txt		millenium_falcon	obi_wan.txt
lydiamoore@Lydias-MacBook-Pro tatoonie % mv luke.txt millenium_falcon 
lydiamoore@Lydias-MacBook-Pro tatoonie % cd .. 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd tatoonie 
lydiamoore@Lydias-MacBook-Pro tatoonie % mv obi_wan.txt millenium_falcon
lydiamoore@Lydias-MacBook-Pro tatoonie % ls
millenium_falcon
lydiamoore@Lydias-MacBook-Pro tatoonie % cd millenium_falcon 
lydiamoore@Lydias-MacBook-Pro millenium_falcon % mv millenium_falcon galaxy_far_far_away
mv: rename millenium_falcon to galaxy_far_far_away: No such file or directory
lydiamoore@Lydias-MacBook-Pro millenium_falcon % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away/tatoonie/millenium_falcon
lydiamoore@Lydias-MacBook-Pro millenium_falcon % mv millenium_falcon galaxy_far_far_away
mv: rename millenium_falcon to galaxy_far_far_away: No such file or directory
lydiamoore@Lydias-MacBook-Pro millenium_falcon % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away/tatoonie/millenium_falcon
lydiamoore@Lydias-MacBook-Pro millenium_falcon % cd ..
lydiamoore@Lydias-MacBook-Pro tatoonie % ls
millenium_falcon
lydiamoore@Lydias-MacBook-Pro tatoonie % mv millenium_falcon galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro tatoonie % mv millenium\ _falcon death_star
lydiamoore@Lydias-MacBook-Pro tatoonie % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv millenium_falcon galaxy_far_far_away
mv: rename millenium_falcon to galaxy_far_far_away: No such file or directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
tatoonie
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd tatoonie 
lydiamoore@Lydias-MacBook-Pro tatoonie % mv milleniu _falcon galaxy_far_far_away
usage: mv [-f | -i | -n] [-v] source target
       mv [-f | -i | -n] [-v] source ... directory
lydiamoore@Lydias-MacBook-Pro tatoonie % mv millenium_falcon galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro tatoonie % cd millenium\ _falcon 
lydiamoore@Lydias-MacBook-Pro millenium _falcon % rm obi_wan.txt
lydiamoore@Lydias-MacBook-Pro millenium _falcon % cd ..
lydiamoore@Lydias-MacBook-Pro tatoonie % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mkdir yavin_4
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv millenium_falcon yavin_4
mv: rename millenium_falcon to yavin_4/millenium_falcon: No such file or directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd yavin_4 
lydiamoore@Lydias-MacBook-Pro yavin_4 % mv millenium_falcon yavin_4
mv: rename millenium_falcon to yavin_4: No such file or directory
lydiamoore@Lydias-MacBook-Pro yavin_4 % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away/yavin_4
lydiamoore@Lydias-MacBook-Pro yavin_4 % ls
lydiamoore@Lydias-MacBook-Pro yavin_4 % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd millenium_falcon
cd: no such file or directory: millenium_falcon
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls 
tatoonie	yavin_4
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd tatoonie 
lydiamoore@Lydias-MacBook-Pro tatoonie % ls
millenium _falcon
lydiamoore@Lydias-MacBook-Pro tatoonie % cd millenium\ _falcon 
lydiamoore@Lydias-MacBook-Pro millenium _falcon % 