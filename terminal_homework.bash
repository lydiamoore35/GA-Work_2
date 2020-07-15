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

Part VI: all togther


lydiamoore@Lydias-MacBook-Pro w2d1 % pwd
/Users/lydiamoore/Desktop/seir-flex-zen-work/codealongs/unit1/w2d1
lydiamoore@Lydias-MacBook-Pro w2d1 % cd ..
lydiamoore@Lydias-MacBook-Pro unit1 % cd ..
lydiamoore@Lydias-MacBook-Pro codealongs % cd ..
lydiamoore@Lydias-MacBook-Pro seir-flex-zen-work % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % ls
GA				death_star
Lydia-Moore-seir-flex-homework	galaxy_far_far_away
Moore				repo-practice
SEIR-FLEX-ZEN			seir-flex-zen-work
ThisIsRight
lydiamoore@Lydias-MacBook-Pro Desktop % cd galaxy_far_far_away 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
tatoonie	yavin_4
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd yavin_4 
lydiamoore@Lydias-MacBook-Pro yavin_4 % mkdir x_wing
lydiamoore@Lydias-MacBook-Pro yavin_4 % cd .. 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
tatoonie	yavin_4
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd cd ..
cd: string not in pwd: cd
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % ls
GA				death_star
Lydia-Moore-seir-flex-homework	galaxy_far_far_away
Moore				repo-practice
SEIR-FLEX-ZEN			seir-flex-zen-work
ThisIsRight
lydiamoore@Lydias-MacBook-Pro Desktop % cd death_star 
lydiamoore@Lydias-MacBook-Pro death_star % mv princess_leia.txt ../yavin_4
lydiamoore@Lydias-MacBook-Pro death_star % ls
darth_vader.txt		storm_trooper.txt	tatoonie
lydiamoore@Lydias-MacBook-Pro death_star % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % ls
GA				death_star
Lydia-Moore-seir-flex-homework	galaxy_far_far_away
Moore				repo-practice
SEIR-FLEX-ZEN			seir-flex-zen-work
ThisIsRight			yavin_4
lydiamoore@Lydias-MacBook-Pro Desktop % cd galaxy_far_far_away 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
tatoonie	yavin_4
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % ls
GA				death_star
Lydia-Moore-seir-flex-homework	galaxy_far_far_away
Moore				repo-practice
SEIR-FLEX-ZEN			seir-flex-zen-work
ThisIsRight			yavin_4
lydiamoore@Lydias-MacBook-Pro Desktop % cd galaxy_far_far_away 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd yavin_4 
lydiamoore@Lydias-MacBook-Pro yavin_4 % ls
millenium_falcon	x_wing
lydiamoore@Lydias-MacBook-Pro yavin_4 % cd millenium_falcon 
lydiamoore@Lydias-MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt	luke.txt
lydiamoore@Lydias-MacBook-Pro millenium_falcon % mv luke.txt ../x_wing
lydiamoore@Lydias-MacBook-Pro millenium_falcon % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon
lydiamoore@Lydias-MacBook-Pro millenium_falcon % cd ..
lydiamoore@Lydias-MacBook-Pro yavin_4 % ls
millenium_falcon	x_wing
lydiamoore@Lydias-MacBook-Pro yavin_4 % mv millenium_falcon ../galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro yavin_4 % ls
x_wing
lydiamoore@Lydias-MacBook-Pro yavin_4 % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv millenium_falcon .../galaxy_far_far_away
mv: rename millenium_falcon to .../galaxy_far_far_away: No such file or directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv millenium_falcon ../galaxy_far_far_away
mv: millenium_falcon and ../galaxy_far_far_away/millenium_falcon are identical
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv x_wing ./galaxy_far_far_away
mv: rename x_wing to ./galaxy_far_far_away: No such file or directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % pwd
/Users/lydiamoore/Desktop/galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
millenium_falcon	tatoonie		yavin_4
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd yavin_4 
lydiamoore@Lydias-MacBook-Pro yavin_4 % ls 
x_wing
lydiamoore@Lydias-MacBook-Pro yavin_4 % mv x_wing ./galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro yavin_4 % mv x_wing ../galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro yavin_4 % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % ls
GA				death_star
Lydia-Moore-seir-flex-homework	galaxy_far_far_away
Moore				repo-practice
SEIR-FLEX-ZEN			seir-flex-zen-work
ThisIsRight			yavin_4
lydiamoore@Lydias-MacBook-Pro Desktop % cd death_star 
lydiamoore@Lydias-MacBook-Pro death_star % mkdir tie_fighter_1
lydiamoore@Lydias-MacBook-Pro death_star % mkdir tie_fighter_2
lydiamoore@Lydias-MacBook-Pro death_star % mkdir tie_fighter_3
lydiamoore@Lydias-MacBook-Pro death_star % cd tie_fighter_1
lydiamoore@Lydias-MacBook-Pro tie_fighter_1 % mv darth_vader.txt ../tie_fighter_1
mv: rename darth_vader.txt to ../tie_fighter_1/darth_vader.txt: No such file or directory
lydiamoore@Lydias-MacBook-Pro tie_fighter_1 % mv darth_cader.txt ../tie_fighter_1
mv: rename darth_cader.txt to ../tie_fighter_1/darth_cader.txt: No such file or directory
lydiamoore@Lydias-MacBook-Pro tie_fighter_1 % pwd     
/Users/lydiamoore/Desktop/death_star/tie_fighter_1
lydiamoore@Lydias-MacBook-Pro tie_fighter_1 % ls
lydiamoore@Lydias-MacBook-Pro tie_fighter_1 % cd ..
lydiamoore@Lydias-MacBook-Pro death_star % ls
darth_vader.txt		tatoonie		tie_fighter_2
storm_trooper.txt	tie_fighter_1		tie_fighter_3
lydiamoore@Lydias-MacBook-Pro death_star % cd tie_fighter_1
lydiamoore@Lydias-MacBook-Pro tie_fighter_1 % ls
lydiamoore@Lydias-MacBook-Pro tie_fighter_1 % cd ..
lydiamoore@Lydias-MacBook-Pro death_star % ls
darth_vader.txt		tatoonie		tie_fighter_2
storm_trooper.txt	tie_fighter_1		tie_fighter_3
lydiamoore@Lydias-MacBook-Pro death_star % cp storm_trooper.txt 
usage: cp [-R [-H | -L | -P]] [-fi | -n] [-apvXc] source_file target_file
       cp [-R [-H | -L | -P]] [-fi | -n] [-apvXc] source_file ... target_directory
lydiamoore@Lydias-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_2
lydiamoore@Lydias-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_3
lydiamoore@Lydias-MacBook-Pro death_star % pwd
/Users/lydiamoore/Desktop/death_star
lydiamoore@Lydias-MacBook-Pro death_star % mv tie_fighter_1 ../galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro death_star % mv tie_fighter_2 ../galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro death_star % mv tie_fighter_3 ../galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro death_star % mv death_star ../galaxy_far_far_away
mv: rename death_star to ../galaxy_far_far_away/death_star: No such file or directory
lydiamoore@Lydias-MacBook-Pro death_star % cd ..
lydiamoore@Lydias-MacBook-Pro Desktop % mv death_star ../galaxy_far_far_away
lydiamoore@Lydias-MacBook-Pro Desktop % cd death_star
cd: no such file or directory: death_star
lydiamoore@Lydias-MacBook-Pro Desktop % ls 
GA				galaxy_far_far_away
Lydia-Moore-seir-flex-homework	repo-practice
Moore				seir-flex-zen-work
SEIR-FLEX-ZEN			yavin_4
ThisIsRight
lydiamoore@Lydias-MacBook-Pro Desktop % cd galaxy_far_far_away 
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % rm tie_fighter_2
rm: tie_fighter_2: is a directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % rm -r tie_fighter_2
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % rm -r tie_fighter_3
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
millenium_falcon	tie_fighter_1		yavin_4
tatoonie		x_wing
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd x_wing 
lydiamoore@Lydias-MacBook-Pro x_wing % touch the_force.txt
lydiamoore@Lydias-MacBook-Pro x_wing % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv x_wing ../yavin_4 
mv: rename x_wing to ../yavin_4: Not a directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd x_wing 
lydiamoore@Lydias-MacBook-Pro x_wing % mv x_wing ../yavin_4 
mv: rename x_wing to ../yavin_4/x_wing: No such file or directory
lydiamoore@Lydias-MacBook-Pro x_wing % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd yavin_4 
lydiamoore@Lydias-MacBook-Pro yavin_4 % mv x_wing ../yavin_4 
mv: rename x_wing to ../yavin_4/x_wing: No such file or directory
lydiamoore@Lydias-MacBook-Pro yavin_4 % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
millenium_falcon	tie_fighter_1		yavin_4
tatoonie		x_wing
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv millenium_falcon ../yavin_4
mv: rename millenium_falcon to ../yavin_4: Not a directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv millenium_falcon .../yavin_4
mv: rename millenium_falcon to .../yavin_4: No such file or directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd millenium_falcon 
lydiamoore@Lydias-MacBook-Pro millenium_falcon % mv millenium_falcon ./yavin_4
mv: rename millenium_falcon to ./yavin_4: No such file or directory
lydiamoore@Lydias-MacBook-Pro millenium_falcon % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % cd yavin_4 
lydiamoore@Lydias-MacBook-Pro yavin_4 % mv millenium_falcon ./yavin_4
mv: rename millenium_falcon to ./yavin_4: No such file or directory
lydiamoore@Lydias-MacBook-Pro yavin_4 % ls
lydiamoore@Lydias-MacBook-Pro yavin_4 % cd ..
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % mv millenium_falcon ../yavin_4
mv: rename millenium_falcon to ../yavin_4: Not a directory
lydiamoore@Lydias-MacBook-Pro galaxy_far_far_away % ls
